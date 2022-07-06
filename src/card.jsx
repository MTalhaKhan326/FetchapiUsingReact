import React from 'react';


function Card(props){
    return(
      <>
      <div className="card">
    
    <div class="container">
      <h4><b>{props.name}</b></h4>
      <p>{props.email}</p>
      <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1453728013993-6d66e9c9123a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fview&tbnid=n5hAWsQ-sgKo_M&vet=12ahUKEwi_4_Ctms33AhVpgc4BHVzpCCEQMygBegUIARDcAQ..i&docid=-UStXW0dQEx4SM&w=1000&h=667&q=image&ved=2ahUKEwi_4_Ctms33AhVpgc4BHVzpCCEQMygBegUIARDcAQ">
        <button type="" class="btn">Click here</button>
      </a>
    </div>
  </div>
      </>
    );
  }
  
  export default Card;