import React from 'react';
import PuppyBeFriend from './PuppyBeFriend';

function DiscoverPage() {
    const discoverStyle = {        
        alert: { display: 'none' }
    }
  return (
    <div>
        <div class="container text-center">
            <h1>Make New Friends</h1>
            <h2>Thumbs up on any pups you'd like to meet!</h2>

            <PuppyBeFriend />

            <h1>Made friends with 1000 pups so far!</h1>

            <div class="alert alert-success" role="alert" style={discoverStyle.alert}>
            You and the puppy are now friends!
            </div>
        </div>
        
    </div>
  );
}

export default DiscoverPage;