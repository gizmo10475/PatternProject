"use strict";

import m from "mithril";

var layout = {
    links: [
        { name: "Hem", route: "#!/" },
        { name: "Form", route: "#!/form" },
        { name: "Map", route: "#!/bikeMap" },
    ],
    view: function(vnode) {
        var bottomNav = vnode.attrs.bottomNav;

        return [
            m("main.container", vnode.children),
            m("nav.bottom-nav", layout.links.map(function(link) {
                return m("a", {
                    href: link.route,
                    class: bottomNav === link.route ? "active" : null
                }, link.name);
            }))
        ];
    }
};

export { layout };