import { useState } from 'react';
import { ArrowRightIcon,ArrowLeftIcon} from '@chakra-ui/icons'
import './App.css';

function App() {
const [index,setIndex] = useState(1);
const images = [{id:1,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjMFianvLprqcE5ZGe47uQFjpGoyHXz5ZJF0bNvwZng&s'},
              {id:2,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyA-huILikWL2ds0xaRBu2x8OHgFgKmlvdUvrO6w9o4A&s'},
              {id:3,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV_RQFFs5oH01nLWNB1l__Jo539vOZz7o5-61-ZAjVA&s'}
]

const onNext = ()=>{
  if(index<(images.length)){
    setIndex((index)=>(index+1))
  }
}

const onBack = ()=>{
  if(index>1){
    setIndex((index)=>(index-1))
  }
}

  return (
    <>
    <center>
    <ArrowLeftIcon onClick={onBack}/>
    {
          images.filter((image)=>image.id===index).map((image) => (
            <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
          ))
    }
    
    <ArrowRightIcon onClick={onNext}/>
  </center>   

    </>
  );
}

export default App;
