import '../layouts/MainHeaderStyle.css';

function MainHeader() {
  return (
    <div className='navbarparent'>
      <div className='navholder'>
        <h1>
          John Colin <span style={{ color: '#DE1E17' }}>Castino</span>
        </h1>
        <div>
          <ul>
            <li>
              <a href='#homeSection'>Home</a>
            </li>
            <li>
              <a href='#aboutSection'>About</a>
            </li>
            <li>
              <a href='#worksSection'>Works</a>
            </li>
            <li>
              <a href='mailto:jncastino106@outlook.com'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
