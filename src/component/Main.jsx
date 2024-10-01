const Main = ({data}) => {
  return (
    <div className="imgContainer">
        <img src="mars.png" alt={data.title || 'bg-img'} className="bgImage"/>
    </div>
  )
}

export default Main