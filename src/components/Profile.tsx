type ProfileProps = {
    name:string,
    age?:number,
    status : 'single' | 'committed'
    children? : React.ReactNode
}


const Profile:React.FC<ProfileProps> = ({name,age,status,children}) => {
    return (
        <div style={{border:"2px solid black",margin:"4px",fontSize:'15'}}>
        <div style={{textAlign:'center',fontWeight:'bold',padding:'5px 0px'}}>Name : {name}</div>
        <div style={{textAlign:'center',fontWeight:'bold',padding:'5px 0px'}}>Age : {age || 30}</div>
        <div style={{textAlign:'center',fontWeight:'bold',padding:'5px 0px'}}>Status : {status || 30}</div>
        <div style={{textAlign:'center',fontWeight:'bold',padding:'5px 0px'}}>
            {children}
        </div>
        </div>
    )
}

export default Profile
