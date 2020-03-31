import React, { useState } from 'react';
import BreedSearchForm from './BreedSearchForm';
import BreedResultList from './BreedResultList';

function SearchPage() {
  const [ showBreed, setShowBreed ] = useState( [] );

  function setResultBreed( breed ){
    console.log( `[setResultBreed] called with '${breed}' ` );
    setShowBreed( breed );
  }

  return (
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Search</h1>
                <p class="text-muted lead">Please select the breed of dog</p>
                <BreedSearchForm setResultBreed={setResultBreed} />
            </div>
        </section>

        <div class="album py-5 bg-light">
            <BreedResultList showBreed={showBreed} />
        </div>
    </div>
  );
}

export default SearchPage;