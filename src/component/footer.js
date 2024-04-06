
import  './Footer.css'
export default function Footer({devName}) {
  return (
    <div className='foot active'>
      <footer>
        Designed and developed by {devName}
        <span>🧡</span>
      </footer>
    </div>
  );
}
