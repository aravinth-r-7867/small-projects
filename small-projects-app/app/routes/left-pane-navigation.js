import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [
            {
                "title" : "Section One",
                "subPages" : [
                    {"title" : "Inventory", "isActive" : true, "iconUrl" : "/assets/images/facebook.png"}, 
                    {"title" : "Configuration", "iconUrl" : "/assets/images/download.png"}, 
                    {"title" : "Scan systems", "iconUrl" : "/assets/images/lightbulb.png"}
                ]
            },
            {
                "title" : "Section Two",
                "subPages" : [
                    {"title" : "Scope of management", "iconUrl" : "/assets/images/lightbulb.png"}, 
                    {"title" : "Software deployment", "iconUrl" : "/assets/images/facebook.png"}, 
                    {"title" : "Prohibit software", "iconUrl" : "/assets/images/microphone.png"}
                ]
            },
            {
                "title" : "Section Three",
                "subPages" : [
                    {"title" : "Configure email alerts", "iconUrl" : "/assets/images/upload.png"}, 
                    {"title" : "Customary Software settings page", "iconUrl" : "/assets/images/microphone.png"}, 
                    {"title" : "Manage license", "iconUrl" : "/assets/images/speaker.png"}
                ]
            },
        ]
    }
});
