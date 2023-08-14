import React from 'react';

interface Props {
  
}

const CountIcon: React.FC<Props> = () => {
  return (
    <div style={{position:'absolute',top:'1px',right:'380px',background:'#ab7a5f',WebkitBoxAlign:'center',
    width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%',
    fontSize:'0.75rem',color:'aliceblue',padding:'12px'}}>
      0
    </div>
  );
};

export default CountIcon;