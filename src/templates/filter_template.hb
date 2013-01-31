<div id="options" style="float:right; width: 200px;">
    <h2>Filter</h2>
    {{#each filters}}
        <div class="filter">
            <div>{{title}}</div>
            {{#each options}}
                <label>
                    <input type="radio" name="{{../name}}" value="{{@index}}" {{#unless @index}}checked{{/unless}} />{{value}}
                </label>
            {{/each}}
        </div>
    {{/each}}
</div>