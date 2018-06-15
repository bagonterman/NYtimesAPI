
$(document).ready(function(){
var beginDate,endDate,myPage,myQuery;

    
    //alert(page);
    $(".searchResults").on("click",function(e){
        e.preventDefault();
        myQuery=$("#searchTerm").val().trim();
        myPage=$("#numRecords").val().trim();
        beginDate=$("#startYear").val().trim();
        endDate=$("#endYear").val().trim();
        // .empty();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
        'api-key': "b272941a0873494285d71c05c884e465",
        'q': myQuery,
        'begin_date': beginDate+"0101",
        'end_date': endDate+"1231",
        'page': myPage/10
        });
        $.ajax({
        url: url,
        method: 'GET',
        }).done(function(result) {
        console.log(result);
        }).fail(function(err) {
        throw err;
        });
        
        var myResponse=response.docs;

        for(i=0;i<myResponse.length;i++){
            var searcDiv = $("<div>").addClass("col-md-3");
            var p = $("<p>").text(i+1);
            var headline = $("<a>").text(myResponse[i].headline).attr("href", myResponse[i].web_url);
            var author = $("<p>").text(myResponse[i].byline.original);
            searcDiv.append(p);
            searcDiv.append(headline);
            searchDiv.append(author);
            $("#articles").prepend(searcDiv);
        }
    });
    $(".clearResults").on("click",function(e){

        $(".searchResults").empty();
    });
});