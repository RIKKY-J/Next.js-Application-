"use client";

export default function Likes() {
  if(typeof window !== "undefined") {
  console.log(window);}
  console.log("likes component rendered");
    return (
    <div onClick ={() => {console.log("likes clicked");}}>

      2000 likes {String(console.log("running on server"))}
    </div>
  )
}
