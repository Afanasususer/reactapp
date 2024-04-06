
import './Main.css'
export default function Main({ pageName, Disinger }) {
  return (
    <div className='main'>
      <main>
      {/* <p className='tst'>this s test for helmet tag style</p> */}
        {pageName} page <br /> Designed by {Disinger}
      </main>
    </div>
  );
}
