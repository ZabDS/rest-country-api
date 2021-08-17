import React, {useEffect, useState} from 'react'
import {Wrapper,ContentWrapper,ImgWrapper,DataWrapper,ButtonWrapper} from './styles/Wrapper'
import Button from '../button/'
import {Link} from 'react-router-dom'
import axios from 'axios'

  async function makeRequest (url){
    let res;
    try{
        res = await axios.get(url)
        // console.log(res);
    }catch (e){
        console.log(e);
    }
        return res?.data;
    }

function CountryDetails(props) {
    const [countryData, setCountryData] = useState(null)
    const code = props.match.params.code  

    useEffect(() => {
          
        makeRequest(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`).then((data)=>{
            const country = {
                Img: data.flag,
                Name: data.name,
                Population: data.population,
                NativeName: data.nativeName,
                Region: data.region,
                SubRegion: data.subregion,
                Capital: data.capital,
                Domain: data.topLevelDomain,
                Currencies: data.currencies,
                Languages: data.languages,
                Borders: data.borders
            };
            setCountryData(country)
        })
    }, [code])

    return (
        <Wrapper>    
            <ContentWrapper>
                <ImgWrapper>
                    <ButtonWrapper>
                        <Link to={'/'}>
                            <Button><i className="fas fa-chevron-left"></i> Back</Button>
                        </Link>
                    </ButtonWrapper>
                    <img src={countryData?.Img} styles={{width:'300px'}} alt=""/>
                </ImgWrapper>
                <div>
                    <h2>{countryData?.Name}</h2>
                    <DataWrapper>
                        <div>
                            <p><b>Native Name: </b>{countryData?.NativeName}</p>
                            <p><b>Population: </b>{countryData?.Population.toLocaleString()}</p>
                            <p><b>Region: </b>{countryData?.Region}</p>
                            <p><b>Sub Region: </b>{countryData?.SubRegion}</p>
                            <p><b>Capital: </b>{countryData?.Capital}</p>
                        </div>
                        <div>
                            <p><b>Top Level Domain: </b>{countryData?.Domain}</p>                
                            <p><b>Currencies: </b>{countryData?.Currencies.map((curr,i,arr)=>(
                                i === arr.length-1?curr.name:curr.name+', '
                            ))}</p>                  
                            <p><b>Language(s): </b>{countryData?.Languages.map((lan,i,arr)=>(
                                i === arr.length-1?lan.name:lan.name+', '
                            ))}</p>  
                        </div>                    
                    </DataWrapper>
                    <ButtonWrapper>
                        <h3>Border Countries: </h3>
                            {countryData?.Borders.map((border,i)=>{
                                return(
                                    <Link key={i} to={`/country/${border.toLowerCase()}`}>
                                        <Button>{border}</Button>  
                                    </Link>
                                );
                            })}
                    </ButtonWrapper>
                </div>
                
            </ContentWrapper>
        </Wrapper>        
    )
}

export default CountryDetails
