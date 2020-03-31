import React, { useContext } from 'react';
import SettingsContext from './SettingsContext';

function SettingsPage( props ) {
    const settings = useContext(SettingsContext);

    console.log( `props: `, props );

    function updateSetting(key){
        /* accessing the DOM directly... we will do another way tomorrow! */
        const val = document.querySelector(`#${key}`).value;

        // pass through update request to function-handler withing settins
        //     ... that accesses the useState of [app] component
        settings.updateSetting( key, val );
    }

    return (
    <div>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="searchThumbsize">Thumbnail Sizes:</label>
                    <select onChange={()=>updateSetting('searchThumbsize')} class="form-control" id="searchThumbsize">
                        <option value='64x64'>Small</option>
                        <option value='128x128'>Medium</option>
                        <option value='256x256'>Large</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="searchLimit">Search Result Pictures:</label>
                    <select onChange={()=>updateSetting('searchLimit')} class="form-control" id="searchLimit">
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value=''>All</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
    );
}

export default SettingsPage;