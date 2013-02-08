<div id="options">
    <h2>Filter</h2>
    {{#each filters}}
        <div class="filter">
            <div class="collapse-toggler collapsed">
                <span class="expand-arrow">&#9655;</span>
                <span class="collapse-arrow">&#9661;</span>
                {{title}}
            </div>
            <div id="{{name}}-filter" class="collapsible">
                {{#each options}}
                    <label>
                         <input class="filter-button {{../name}}" type="radio"
                         name="{{../name}}" value="{{@index}}"
                         {{#unless @index}}checked{{/unless}} />{{label}}
                    </label>
                {{/each}}
            </div>
        </div>
    {{/each}}
</div>
