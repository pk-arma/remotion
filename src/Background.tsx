import { AbsoluteFill } from "remotion";

export const Background: React.FC = () => {
  return (
     <AbsoluteFill
        style={{backgroundColor: "lightblue", 
             padding:54,
        }}
      >
        <div style={{flex:1,backgroundColor:'white',boxShadow:"0 5px 10px rgba(0,0,0,0.1)"}}/>
      </AbsoluteFill>
  )
}