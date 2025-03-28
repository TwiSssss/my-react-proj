import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
    return (
        <ul className={style.FriendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ul>
    );
};
export default FriendList;
