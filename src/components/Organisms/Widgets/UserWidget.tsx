import { useState } from 'react';
import { ResRamdomUsersType } from '../../../models/users'
import RamdomUsers from '../../Molecules/Widgets/RamdomUsers';


const UserWidget = (props: ResRamdomUsersType) => {

  const [usersNum, setUsersNum] = useState<number>(3)

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 
    w-[90%] xl:w-[75%]" >

      <div className="font-bold text-xl px-4 ">Who to follow?</div>

      {props.results.slice(0, usersNum).map((user) => (
        <RamdomUsers key={user.login?.uuid}
          name={user.name} login={user.login} picture={user.picture} />
      )
      )}

      <button
        onClick={() => setUsersNum(usersNum + 3)}
        className="h-10 text-blue-300 pl-4 pb-3 hover:text-blue-400"
      >Show more</button>
    </div>
  )
}
export default UserWidget