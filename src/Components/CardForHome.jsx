import React from 'react'

const CardForHome = (props) => {
    let {description, imageUrl} = props;
  return (
    <div class="card " style={{width: '100%'}}>
    <div class="card-body" style={{backgroundColor:'#fbaf32'}}>
    <p class="card-text">{description}</p>
    </div>
    <img class="card-img-top" src={!imageUrl ? "https://placekitten.com/300/200" : imageUrl}/>
    </div>
  )
}

export default CardForHome
