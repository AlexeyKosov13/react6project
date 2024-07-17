import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

// Тут список пользователей: https://reqres.in/api/users

function AppUsers() {
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      }).catch(err => {
        console.warn(err);
        alert('ошибка при получении пользователей')
      }).finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSendInvites = () => {

    setSuccess(true);
  }

  return (
    <div className="Users">
      {success ? <Success count={invites.length} /> :
        <Users items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      }
    </div>
  );
}

export default AppUsers;
