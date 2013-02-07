<div id="options">
    <h2>Filter</h2>
    {{#each filters}}
        <div class="filter">
            <div>{{title}}</div>
            {{#each options}}
                <label>
                  <!-- div class="{{../name}}+</div> put in a div for controller
                       to fill in??? in place of input? -->
                  <input class="filter-button {{../name}}" type="radio"
                         name="{{../name}}" value="{{@index}}"
                         {{#unless @index}}checked{{/unless}} />{{label}}
                </label>
            {{/each}}
        </div>
    {{/each}}
</div>
