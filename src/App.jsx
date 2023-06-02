import React, { useState, useEffect } from 'react';
import "./App.css";


// ...............first way to solve this............


// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://api.github.com/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleClick = async (username) => {
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch user details');
//       }
//       const data = await response.json();
//       setSelectedUser(data);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="main">
//       <div className="grid-col-1">
//         <h1>GitHub Users</h1>
//         {error && <p>Error: {error}</p>}
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} onClick={() => handleClick(user.login)}>
//               {user.login}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="grid-col-2">
//         {selectedUser && (
//           <div className="user-details">
//             <h2>Username: {selectedUser.login}</h2>
//             <p>Twitter Username: {selectedUser.twitter_username || 'N/A'}</p>
//             <p>Location: {selectedUser.location || 'N/A'}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



//........second way ..................
const App = () => {
  const [state, setState] = useState({
    users: [],
    selectedUser: null,
    error: null,
  });

  const { users, selectedUser, error } = state;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setState((prevState) => ({ ...prevState, users: data }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, error: error.message }));
      }
    };
    fetchUsers();
  }, []);

  const handleClick = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      setState((prevState) => ({ ...prevState, selectedUser: data }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, error: error.message }));
    }
  };

  return (
    <div className="main">
      <div className="grid-col-1">
        <h1>GitHub Users</h1>
        {error && <p>Error: {error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleClick(user.login)}>
              {user.login}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid-col-2">
        {selectedUser && (
          <div className="user-details">
            <h2>Username: {selectedUser.login}</h2>
            <p>Twitter Username: {selectedUser.twitter_username || 'N/A'}</p>
            <p>Location: {selectedUser.location || 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export { App};


