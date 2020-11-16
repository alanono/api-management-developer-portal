/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import "./collapsibles";

console.log("executou" + window.location.pathname);
/* Hack para ignorar a homepage*/
if(window.location.pathname == "/") {
    window.location.pathname = "/introducao";
};
