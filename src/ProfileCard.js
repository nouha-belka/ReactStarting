function ProfileCard({title,handle,image}){
    return(
        <div>
            <img src={image} />
            <div>Title is {title}</div>
            <div>Hnadle is {handle}</div>

        </div>
    );
}
export default ProfileCard;