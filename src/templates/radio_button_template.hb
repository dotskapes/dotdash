{{#each options}}
    <label>
        <input class="filter-button" type="radio" 
        name="{{../name}}" value="{{label}}" 
        {{#unless @index}}checked{{/unless}} />{{label}}
    </label>
{{/each}}