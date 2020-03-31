import React, { useState, useEffect } from "react";

function BreedSearchForm( props ){
    const [ searchInput, setSearchInput ] = useState("");
    const [ breedList, setBreedList ] = useState([]);
    const [ showList, setShowList ] = useState([]);

    useEffect( function(){
        loadBreedList();
    }, [] );

    function handleInputChange( e ){
        const newInput = e.target.value;
        setSearchInput( newInput );

        // adjusting our breed list on screen
        if( newInput.length>1 ){
            const newList = breedList.filter( breed=>breed.indexOf(newInput)==0 )
            setShowList( newList );
        } else {
            setShowList( [] );
        }
    }

    function setFormValue( newInput ){
        setSearchInput( newInput );
        // clear the list
        setShowList( [] );
    }

    async function loadBreedList(){
        const breedListResult = await fetch( 'https://dog.ceo/api/breeds/list' ).then( result=>result.json() )
        setBreedList( breedListResult.message );
        console.log( ` *** saved dog list` );        
    }

    return (
    <form>
        <div class="input-group">
            <input onChange={handleInputChange} value={searchInput} type="text" class="form-control" placeholder="Search your breed"/>
            <div class="input-group-append">
                <button onClick={function(){ props.setResultBreed(searchInput) }} class="btn btn-outline-primary" type="button">Search</button>
            </div>
        </div>

        <div class="mb-3">
            <ul class="col-6 list-group">
                { showList.map( breed =><li class="list-group-item" onClick={()=>setFormValue(breed)}>{breed}</li> )}
            </ul>
        </div>
    </form>        
    );
}

export default BreedSearchForm;