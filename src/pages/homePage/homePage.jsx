import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

function HomePage(){
    return(
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find your dream property with ease</h1>
                    <p>Embark on your journey to finding the perfect property effortlessly. Discover your dream home with ease as you navigate through our vast listings, meticulously crafted to cater to your every need.<span style={{ color: 'red' }}> Click on the Search bar to explore the properties</span></p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experienece</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                    </div>
            
            </div>
            <div className="imgContainer">
                <img src='/bg.png'alt=''/>
            </div>
        </div>
    )
}
export default HomePage;