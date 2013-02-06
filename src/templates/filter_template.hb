<div id="options">
    <h2>Filter</h2>
    {{#each filters}}
        <div class="filter">
            <div>{{title}}</div>
            {{#each options}}
                <label>
                    <input class="filter-button" type="radio" name="{{../name}}" value="{{@index}}" {{#unless @index}}checked{{/unless}} />{{label}}
                </label>
            {{/each}}
        </div>
    {{/each}}
</div>