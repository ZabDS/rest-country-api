import React from 'react'
import Searchbar from '../searchbar'
import Card from '../card/index';
import Dropdown from '../dropdown'
import { CardWrapper } from './cardWrapper'
import InfiniteScroll from "react-infinite-scroll-component";
 
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function MainPage() {
    const [countries, setCountries] = useState([])
    const [showCountries, setShowCountries] = useState([])
    const [dataToShow, setDataToShow] = useState([])

    async function makeRequest (url){
        let res;
        try{
            res = await axios.get(url)
        }catch (e){
            console.log(e);
        }
        return res?.data;
    }

    async function getCountryByRegion (region){
        let res;
        const url = `https://restcountries.eu/rest/v2/region/${region}`
        try{
            res = await makeRequest(url);
            setDataToShow(res);
            setShowCountries(res.slice(0,20))
        }catch (e){
            console.log(e);
        }
        return res?.data;
    }

    async function fakeNewRequest(){
        setTimeout(()=>{
            const ini=showCountries.length
            const end= ini + 20
            setShowCountries(dataToShow.slice(0,end))
        },500)
    }

    useEffect(() => {
        makeRequest('https://restcountries.eu/rest/v2/all').then((countries)=>{
            // console.log(countries);
            setCountries(countries);
            setDataToShow(countries);
            setShowCountries(countries.slice(0,20))
        })
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        matches = countries.filter(country => {
            const regex = new RegExp(`${text}`,'gi')
            return country.name.match(regex)
        })
        setDataToShow(matches)
        setShowCountries(matches.slice(0,20))
    }

    return (
        <div>
            <Searchbar>
                <Searchbar.IconInput type="input" placeholder="Search for a country..."
                onChange={(e)=>onChangeHandler(e.target.value)}/>
                <Dropdown menuBtn=' Filter by region '>
                    <Dropdown.MenuElementWrapper>
                        <Dropdown.MenuElement onClick={()=>getCountryByRegion('americas')}>America</Dropdown.MenuElement>
                        <Dropdown.MenuElement onClick={()=>getCountryByRegion('africa')}>Africa</Dropdown.MenuElement>
                        <Dropdown.MenuElement onClick={()=>getCountryByRegion('asia')}>Asia</Dropdown.MenuElement>
                        <Dropdown.MenuElement onClick={()=>getCountryByRegion('europe')}>Europe</Dropdown.MenuElement>
                        <Dropdown.MenuElement onClick={()=>getCountryByRegion('oceania')}>Oceania</Dropdown.MenuElement>
                    </Dropdown.MenuElementWrapper>
                </Dropdown>
                </Searchbar>

                <InfiniteScroll
                    dataLength={showCountries.length}
                    next={fakeNewRequest}
                    hasMore={true}               
                >
                    <CardWrapper>
                        {showCountries.map((country,i)=>{
                            return(
                                <Card key={i}>
                                    <Link to={`/country/${country.alpha2Code}`}>
                                    <Card.Image src={country.flag} alt="flag"/>
                                    <Card.Body>
                                        <Card.Title>{country.name}</Card.Title>
                                        <Card.Text>
                                            <Card.Meta data={country.population.toLocaleString()}>Population: </Card.Meta>
                                            <Card.Meta data={country.region}>Region: </Card.Meta>
                                            <Card.Meta data={country.capital}>Capital: </Card.Meta>
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                                </Card>                            
                            )
                        })}
                    </CardWrapper>
                </InfiniteScroll>
        </div>
    )
}

export default MainPage
