
import './Main.css'
export default function Main({ pageName, Disinger }) {
  return (
    <div className='main'>
      <main>
        {pageName} page <br /> Designed by {Disinger}
      </main>
    </div>
  );
}
