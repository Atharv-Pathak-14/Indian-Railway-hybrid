/**
 * Created by kamlesh on 1/25/2017.
 */
$(document).ready(function () {


typeof $.typeahead === 'function' && $.typeahead({
    input: ".js-typeahead-src",
    minLength: 1,
    maxItem: 15,
    //order: "asc",
    hint: true,
    offset: true,
    emptyTemplate: 'No result for "{{query}}"',
    display: ["code", "name"],
    correlativeTemplate:true,
    cache: true,
    template: '<span>' +
    '<span class="division"><button style="background:rgba(98,246,140,1)">{{code}}</button> | {{name}}</span>' +
    '</span>',
    source:stationdata,
    callback: {
        onClickAfter: function(node, a, item, event) {

            sourcedetails = item;
            submitform();
            console.log(sourcedetails);

        }
    },

});
typeof $.typeahead === 'function' && $.typeahead({
    input: ".js-typeahead-dst",
    minLength: 1,
    maxItem: 15,
    //order: "asc",
    hint: true,
    offset: true,
    emptyTemplate: 'No result for "{{query}}"',
    display: ["code", "name"],
    correlativeTemplate:true,
    cache: true,
    template: '<span>' +
    '<span class="division"><button style="background:rgba(255,193,26,0.52)">{{code}}</button> | {{name}}</span>' +
    '</span>',
    source:stationdata,
    callback: {
        onClickAfter: function(node, a, item, event) {

            destinationdatails = item;

            console.log(destinationdatails);
            submitform();


        }
    },

});
});
