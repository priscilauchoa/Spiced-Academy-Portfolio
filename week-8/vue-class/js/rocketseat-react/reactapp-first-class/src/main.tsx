import React, {useEffect, useState} from 'react';

interface IUser {
  name: string,
  email: string
}

function Home() {
  const [users, setUsers] = useState<IUser[]>([])

    
  return (
    <div className="Home">
      <Home />
    </div>
  );
}

export default Home;