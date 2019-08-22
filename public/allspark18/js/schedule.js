/**
 *  name : schedule_dom_Manipulation
 *  description : manipulates dom with the result
 */
var schedule_dom_Manipulation = (function(){
    isScheduleReady = true;
    //schedule day/date constants
    var DAYDETAILOBJ = {
        DAY1 : 'TECH TALKS',
        DAY2 : 'SOLUTION SPACE',
        DATE1 : 'SEPTEMBER 7, 2018',
        DATE2 : 'SEPTEMBER 8, 2018'
    }

    //schedule location constants
    var LOCATION = {
        DAY1_LOCATION: "Hotel Feathers, Chennai" ,
        DAY2_LOCATION: "Sirius, Chennai"
    }

    var DEFAULTMSG = {
        SCHEDULE_CONSTRUCT: "SCHEDULE UNDER CONSTRUCTION....."
    }


    /**
     * function to construct list header
     * @param {*} isAllSpark 
     */
    var constructListHeader = function(isAllSpark){
        var li = $("<li class = 'schedule-list-item-wrapper'/>")
        var h1,h2;
        if(isAllSpark){
        h1 = $("<h1/>").text(DAYDETAILOBJ.DAY1);
        h2 = $("<h2/>").text(DAYDETAILOBJ.DATE1);
        
        }else{
        h1 = $("<h1/>").text(DAYDETAILOBJ.DAY2);
        h2 = $("<h2/>").text(DAYDETAILOBJ.DATE2);
        } 
        li.append(h1);
        li.append(h2);
        $(".schedule-wrapper").append(li);
    }

    /**
     * function to construct list footer
     * 
     */
    var constructListFooter = function(isAllSpark){
        var li = $("<li class = 'schedule-footer'/>");
        var icon = $("<i class = 'fa fa-map-marker'>");
        var span;
        if(isAllSpark)
            span = $("<span class = 'allspark-location'/>").text(LOCATION.DAY1_LOCATION);
        else
            span = $("<span class = 'allspark-location'/>").text(LOCATION.DAY2_LOCATION);
        li.append(icon);
        li.append(span);
        $(".schedule-wrapper").append(li);

    }

    /**
     * Constructs the dom for the schedule page
     * @param {*} sessions - dataset for the day
     * @param {*} isAllSpark - flag to check if its allspark day/solution space day
     */
    var constructDOM = function(sessions,isAllSpark){ 
        $(".schedule-wrapper").empty();
        if(isAllSpark){
            $("#allspark-btn").removeClass('yellow');
            $("#allspark-btn").addClass("violet");
            $("#solution-space-btn").addClass('yellow');
            $("#solution-space-btn").removeClass('violet');
        }else{
            $("#allspark-btn").addClass('yellow');
            $("#allspark-btn").removeClass("violet");
            $("#solution-space-btn").removeClass('yellow');
            $("#solution-space-btn").addClass('violet');
        }
        constructListHeader(isAllSpark);
        if(!isScheduleReady){
             var li = $("<li class = dummy/>").text(DEFAULTMSG.SCHEDULE_CONSTRUCT);
             $(".schedule-wrapper").append(li);   
        }else{
           // let list = $("<li/>");
            sessions.forEach(session => {    
                var li = $("<li class = 'schedule-list-item-wrapper'/>")
                var table = $("<div class = schedule-table/>");
                session.forEach(ele => {
                    var row = $("<div class = schedule-row/>"); 
                    var cell1, cell2, cell3, icon, ele_topic, ele_desc, ele_presenter;
                    cell1 = $("<div class = 'schedule-cell time'/>").text(ele.time+' '+ele.ampm);
                    cell2 = $("<div class = 'schedule-cell topic'/>");
                    ele_topic = $("<div class = 'upper-case color-yellow'/>").text(ele.topic);
                    if(ele.desc !== ""){
                        ele_desc = $("<div class = 'topic-desc'/>").text(ele.desc);
                    }
                    participants = ele.participants;
                    ele_presenter = $("<div class = 'presenter-wrapper'/>");
                    
                    if(participants != null){
                         icon = $("<div class = 'lnr lnr-user presenter-icon'/>");
                         ele_presenter.append(icon);
                         participants.forEach(ele => {
                            var presenter_name = $("<div class = 'presenter-name'/>").text(ele.name);
                            ele_presenter.append(presenter_name);
                         });
                    }

                    cell2.append(ele_topic);
                    cell2.append(ele_desc);
                    cell2.append(ele_presenter);
                    if('color' in ele){
                        cell2.addClass('allspark-yellow');
                    } 
                    row.append(cell1);
                    row.append(cell2);
                    table.append(row);                  
                   });
                   li.append(table);
                   $(".schedule-wrapper").append(li);
            });
        }
        constructListFooter(isAllSpark)  
    }

    /**
     * init function to initiate the dom construction
     * @param {*} isAllSpark flag to check if its allspark day/solution space day
     */
    var init = function(isAllSpark){
        if(isAllSpark){
            constructDOM(ALLSPARK_SESSIONS,isAllSpark);
        }else{
            constructDOM(SOL_SPACE_EVENTS,isAllSpark);
        }
    }

    return{
        init : init,
        constructDOM : constructDOM
    }
})();

/**
 * closure name: buttonAction
 * button action to add to the dom 
 */
var buttonAction =(function(){
    var constructSessionforAllspark = function(){
        schedule_dom_Manipulation.init(true);
    }
    var constructSessionforSolutionSpace = function(){
        schedule_dom_Manipulation.init(false);
    }
    return {
        constructSessionforAllspark : constructSessionforAllspark,
        constructSessionforSolutionSpace : constructSessionforSolutionSpace
    }
})();

$(document).ready(function(){ 
    schedule_dom_Manipulation.constructDOM(ALLSPARK_SESSIONS,true);
    $("#allspark-btn").on('click',buttonAction.constructSessionforAllspark);
    //$("#allspark-btn").trigger("click");
    $("#solution-space-btn").on('click',buttonAction.constructSessionforSolutionSpace);
});