import React from 'react';
import BreedSearchForm from './BreedSearchForm';
import BreedResultList from './BreedResultList';

function SearchPage() {
  return (
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Search</h1>
                <p class="text-muted lead">Please select the breed of dog</p>
                <BreedSearchForm />
            </div>
        </section>

        <div class="album py-5 bg-light">
            <BreedResultList />
        </div>
    </div>
  );
}

export default SearchPage;