import './App.css';

function App() {
  return (
      <nav className="navbar custom-header">

        <div className="logo">

          <img src="https://storage.googleapis.com/msgsndr/zNhcZOlxI0fOLssUol8w/media/619c65767f7a201165c79947.png" class="img-fluid" alt={'hello'}/>

        </div>



        <ul className="nav-links">



          <input type="checkbox" id="checkbox_toggle">

            <label htmlFor="checkbox_toggle" className="hamburger">☰</label>



            <ul className="menu">

              <li className="active">
                  <a href="https://app.engagemorecustomers.us/v2/preview/oJrvyPwaq89wqHrEuOuj">Home</a></li>

              <li><a href="https://app.engagemorecustomers.us/v2/preview/EoAVKUAwlbLAel1QQely">About</a></li>

              <li className="services">

                <a href="google.com">Properties</a>

                <ul className="dropdown">

                  <li><a href="https://app.engagemorecustomers.us/v2/preview/SOj6ALmBlp7iUfghul0K">Property Grid</a></li>

                  <li><a href="https://app.engagemorecustomers.us/v2/preview/oQqEQzpDZ67cCAyDOFxD">Property List</a></li>

                  <li><a href="https://app.engagemorecustomers.us/v2/preview/0iZ8atsBvKPFFvmdlBKE">Property Detail</a></li>

                </ul>

              </li>

              <li><a href="https://app.engagemorecustomers.us/v2/preview/EtdJ70ibmLlVqFZTwXTH">Pricing</a>
              </li>

              <li><a href="https://app.engagemorecustomers.us/v2/preview/dtEn6hs9TzblJYkVdQdK">Contact</a>
              </li>
            </ul>
          </input>
        </ul>
      </nav>
  );
}

export default App;
