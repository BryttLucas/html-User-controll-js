let user = null;

$().ready(() => {

    let parms = getUrlParms();
    get(parms.id)
        .done((res) => {
            user = res.data;
            console.log(res);
            UserCommon.display(user);
        });

    $("#save").click(() => { 
        let usr = UserCommon.save(); 
        change(usr)
            .done((res) => {
                console.log("Change:", res);
                window.location = "user-list.component.html";
            })
            .fail((err) => {
                console.error(res);
            });
    });

});