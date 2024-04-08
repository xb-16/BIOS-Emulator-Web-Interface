if(window.innerWidth < 960){
    alert("You Can't Navigate BIOS effectively, Please Use Scren With Long Width For Best Experience.");
}

// disabling right Click Using Mouse.
document.oncontextmenu = (e) => {
    e.preventDefault();
};


var var1 = `Keys used to view or configure devices: &lt;Enter&gt; expands or collapses devices with a + or -
        &lt;Ctrl+Enter&gt; expands all &lt;+&gt; and &lt;-&gt; moves the device up or down.&lt;n&gt; May move removable device between Hard Disk or Removable Disk &lt;d&gt; Remove a device that is not installed.`;
var var2 = `&lt;tab&gt;, &lt;shift-tab&gt;, or &lt;enter&gt; selects fields`;
var var3 = `Setup changes system behavior by modifying the BIOS
            Configuration parameters. Selecting incorrect values
            may cause system boot failure; load Setup Default values
            to recover.<br><br>
            &lt;Up/Down&gt; arrows select fields in current menu.<br>
            &lt;PgUp/PgDn&gt; moves to previous/next page on scrollable menus.<br>
            &lt;Home/End&gt; moves to top/bottom item of current menu.<br><br>
            Within a field,&lt;F5&gt; or &lt;-&gt; selects next lower value and
            &lt;F6&gt;, &lt;+&gt;, or &lt;Space&gt; selects next higher value.<br><br>
            &lt;Left/Right&gt; arrows select menus on menu bar.
            &lt;Enter&gt; displays more options for items marked with a&,
            &lt;Enter&gt; also displays an option list on some fields.<br><br>
            &lt;F9&gt; loads factory-installed Setup Default values.<br>
            &lt;F10&gt; restores previous values from CMOS.<br><br>
            &lt;ESC&gt; or &lt;Alt-X&gt; exits Setup: in sub-menus, pressing these
            keys returns to the previous menu.<br><br>
            &lt;F1&gt; or &lt;Alt-H&gt; displays General Help (this screen).<br><br><br> `;

var tabCounter = 1, // Tab Counter
insideTab = true,   // Flag Outside Right/Left
j = 0,              // Counter Of Keys & Its Values in Menu
k = 0,              // Counter Of Keys & Its Values in SubMenu
b = 0,              // Counter Of Yes/No Options In Confirmation Panel
tabChanged = false, // Tab Change Flag
index = 0,          // Index Of Tab
items,              // The keys
values,             // The Values
valuesblack,        // The Black Values
itmSpcfcHelp,       // Guidlines For Every Key
panel,              // Confirmation Panel With Yes/No
panelFooter,        // Footer Of Confirmation Panel
panelflag = false,  // Panel Flag
f10 = false,        // F10 Click Flag
helpPage,           // Help Page
biosClosed = false, // Page Status
subMenu,            // Sub Menu
f9 = false;         // F9 Click Flag

var switches = Array.from(document.querySelectorAll(".swtch .selm"));
var tabs = Array.from(document.querySelectorAll(".telm"));


switches[0].style.backgroundColor = "#B6B3B0";
switches[0].style.color = "#0019CB";
tabs[0].style.display = "block";


// Function Work If Tab Changed :(Right&Left Arrows)
function change(tab,event,f){
    switches = Array.from(document.querySelectorAll(".swtch .selm"));
    tabs = Array.from(document.querySelectorAll(".telm"));

    index = f - 1;
    tabCounter = f;
    tabs.forEach(elm => {
        elm.style.display = "none";
    });

    document.querySelector("." + tab).style.display = "block";
    
    switches.forEach(elm => {
        elm.style.backgroundColor = "transparent";
        elm.style.color = "#B6B3B0";
        
    });
    event.currentTarget.style.backgroundColor = "#B6B3B0";
    event.currentTarget.style.color = "#0019CB";
    if(itmSpcfcHelp != null){
        itmSpcfcHelp.innerHTML = "";
    }
}
// End function Change() 


// start timer
var tm = new Date();
let mn;
var tmfield = document.querySelector(".time span");
document.querySelector(".date span").innerHTML = tm.getMonth() + "/" + tm.getDate() + "/" + tm.getFullYear();
tmfield.innerText = tm.getHours() + ":" + tm.getMinutes() + ":" + tm.getSeconds();
setInterval(function(){
    tm = new Date();
    mn = (tm.getMinutes().toString().length == 1) ? "0" + tm.getMinutes() : tm.getMinutes();
    if(tmfield){
        tmfield.innerText = tm.getHours() + ":" +  mn + ":" + tm.getSeconds();
    }
},1000);
// end timer

// controlling using keyboard
if(!biosClosed){
document.onkeydown = function(e) {
    e.preventDefault(); // To 
    var keyCode = e.code;

    subMenu = document.querySelector(".subMenu");
    panel = document.querySelector(".panel");
    
    function chk(f,op){
        switches = Array.from(document.querySelectorAll(".swtch .selm"));
        if(op == "+"){
            f++;
        }else {
            f--;
        }
        if(f < 1){
            f = 5;
        }
        if(f > 5){
            f = 1;
        }
        return f;
    }

    if(insideTab == true && subMenu == null){
        switch(keyCode){
            case "ArrowRight":
                index = chk(tabCounter,"+") - 1;
                switches[index].click();
                tabChanged = true;
                j = 0;
                break;
            case "ArrowLeft":
                index = chk(tabCounter,"-") - 1;
                switches[index].click();
                tabChanged = true;
                j = 0;
                break;
        }
    } 

    function chkk(counter, elm){
        items = Array.from(tabs[index].querySelectorAll(elm + ".child:first-child .key .elm:not(.not)"));
        values = Array.from(tabs[index].querySelectorAll(elm + ".child:first-child .value .elm:not(.not)"));
        valuesblack = Array.from(tabs[index].querySelectorAll(elm + ".child:first-child .value .black span"));
        itmSpcfcHelp = tabs[index].querySelector(elm + ".child:last-child .subchild:last-child"); 
        
        if(counter > (items.length - 1)){
            counter = 0;
        }
        if(counter < 0){
            counter = items.length - 1;
        }
        
        
        valuesblack.forEach(i => {
            i.style.color = "black";
            i.style.backgroundColor = "inherit";
        });

        items.forEach(i => {
            i.style.color = "inherit";
        });
        items[counter].style.color = "white";
        items[counter].click();

        if(values.length != 0) {
            values.forEach(i => {
                i.style.color = "inherit";
                i.style.backgroundColor = "inherit";
            });
            if(values[counter].classList.contains("black")){
                values[counter].querySelector("span").style.color = "#ABAAAB";
                values[counter].querySelector("span").style.backgroundColor = "black";
            }else {
                values[counter].style.color = "black";
            }
        }
        
        valuesblack.forEach(i => {
            i.parentElement.style.color = "black";
        });

        counter++;
        if(!subMenu){
            j = counter;
        }
        else{
            k = counter;
        }
    }

    if(keyCode == "Escape" && subMenu){
        subMenu.remove();
        switches.forEach(i => {
            i.style.visibility = "visible";
        });
    }
    if(keyCode == "Escape" && insideTab == true  && !subMenu){
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "black";
        biosClosed = true;
    }

    // when move to another tab clear all changes
    if(tabChanged == true && items != null){
        items.forEach(i => {
            i.style.color = "inherit";
        });
        if(values){
            if(values.length != 0) {
                values.forEach(i => {
                    i.style.color = "inherit";
                });
            }
        }
    }
    if(insideTab == true && subMenu == null){
        switch(keyCode){
            case "ArrowDown":
                chkk(j,"");
                break;
            case "ArrowUp":
                j = j - 2;
                chkk(j,"");
                break;
        }
    }
    
    if(insideTab == true && subMenu != null){
        switch(keyCode){
            case "ArrowDown":
                chkk(k,".subMenu ");
                break;
            case "ArrowUp":
                k = k - 2;
                chkk(k,".subMenu ");
                break;
        }
    }

    if(keyCode == "F1" && biosClosed == false){
        document.body.innerHTML += `
        <div class="help">
            <div>general help</div>
            <div>
                ${var3}
                <div class="continue curly">continue</div>
            </div>
        </div>`;
        insideTab = false;
    }
    
    helpPage = document.querySelector(".help");
    if(keyCode == "Escape" && helpPage){
        helpPage.remove();
        insideTab = true;
    }

    if(keyCode == "F10" && biosClosed == false){
        if(panel == null){
            displayPanel("save configuration changes and exit now");
            f10 = true;
        }
    }
    if(keyCode == "F9" && biosClosed == false){
        if(panel == null){
            displayPanel("load default configuration now");
            f9 = true;
        }
    }
    if(keyCode == "Escape"){
        if(panel != null){
            panel.remove();
            panelFooter.remove();
            insideTab =true;
            b = 0;
        }
    }

    if(!insideTab){                            
        var yn = Array.from(document.querySelectorAll(".panel .yn > div"));
        if(keyCode == "Space" && panel){
            yn.forEach(i => {
                i.style.backgroundColor = "transparent";
                i.style.color = "black";
            });
            yn[b].style.backgroundColor = "black";
            yn[b].style.color = "white";
            b = (b == 0) ? 1 : 0;
            panelflag = true;
        }
    }

    if(keyCode == "Enter" && insideTab == false){
        panelFooter.remove();
        panel.remove();
        insideTab = true;
        if(b == 1 && panelflag == true && f10 == true){ // if F10 Panel Opened,When I clicked in enter where Yes is choosen,close The Bios.
            document.body.innerHTML = "";
            document.body.style.backgroundColor = "black";
            biosClosed = true;
        }
        
        if(b == 1 && index == 4 && j == 1){ // if i click on the first items in the last Tab,Close The Bios Interface.
            if(!f9){
                document.body.innerHTML = "";
                document.body.style.backgroundColor = "black";
                biosClosed = true;
            }
        }                
        j = 0;
        panelflag == false;
    }

    function hideSwitches(){
        switches.forEach(i => {
            i.style.visibility = "hidden";
        });
        switches[index].style.visibility = "visible";
    }

    if(keyCode == "Enter" && insideTab == true){
        if(index == 0){
            switch(j){
                case 5:
                    if(!subMenu){
                        tabs[index].innerHTML += `
                        <div class="parent subMenu">
                        <div class="child">
                            <div class="key">
                        <div class="elm" onclick="showdsc('Select the drive type of the fixed disk installed in your system. If type User is selected, Cylinders, Heads, and Sectors can be edited directly. Auto attempts to automatically detect the drive type for drives that comply with ANSI specifications. ')">type:</div>
                        <div class="elm" onclick="showdsc('')">cylinders:</div>
                        <div class="elm" onclick="showdsc('')">heads:</div>
                        <div class="elm" onclick="showdsc('')">sectors/track:</div>                        
                        <div class="elm" onclick="showdsc('')">maximum capacity</div>
                        <br>                        
                        <div class="elm" onclick="showdsc('')">landing zone</div>
                        <div class="elm" onclick="showdsc('')">write precomp</div>
                        <br>
                        <div class="elm" onclick="showdsc('')">multi sector transfer:</div>
                        <div class="elm" onclick="showdsc('')">LBA mode control</div>
                        <div class="elm" onclick="showdsc('')">32-bit IO:</div>
                        <div class="elm" onclick="showdsc('')">transfer mode:</div>
                        <div class="elm" onclick="showdsc('')">smart monitoring:</div>
                        <div class="heading">${items[j-1].innerText}</div>
                        </div>
                        <div class="value">
                        <div class="elm curly black"><span>auto</span></div>
                        <div class="elm curly black"><span>13328</span></div>
                        <div class="elm curly black"><span>15</span></div>
                        <div class="elm curly black"><span>63</span></div>
                        <div class="elm">6449 MB</div>
                        <br>
                        <div class="elm curly black"><span>762</span></div>
                        <div class="elm curly black"><span>None</span></div>
                        <br>
                        <div class="elm curly black"><span>16 Sectors</span></div>
                        <div class="elm curly black"><span>Enabled</span></div>
                        <div class="elm curly black"><span>Enabled</span></div>
                        <div class="elm curly black"><span>fast PIO 4</span></div>
                        <div class="elm curly black"><span>Enabled</span></div>
                        </div>             
                        </div>
                        <div class="child">
                        <div class="subchild">Item Specific Help</div>
                        <div class="subchild"></div>
                        </div>
                        </div>    `;
                        hideSwitches();
                    }
                    break;
                case 9:
                    if(!subMenu){
                        tabs[index].innerHTML += `
                <div class="parent subMenu">
                    <div class="child">
                        <div class="key">
                            <div class="elm" onclick="showdsc('Selects power-on state for Numlock key.')">Numlock:</div>
                            <div class="elm" onclick="showdsc('')">Key Click:</div>
                            <div class="elm" onclick="showdsc('')">Keyboard auto-repeat rate:</div>                        
                            <div class="elm" onclick="showdsc('')">Keyboard auto-repeat delay:</div>
                            <div class="heading">${items[j-1].innerText}</div>
                        </div>
                        <div class="value">
                            <div class="elm curly black"><span>Off</span></div>
                            <div class="elm curly black"><span>Disabled</span></div>
                            <div class="elm curly black"><span>30/sec</span></div>
                            <div class="elm curly black"><span>1/2 sec</span></div>                                      
                        </div>
                    </div>
                    <div class="child">
                        <div class="subchild">Item Specific Help</div>
                        <div class="subchild"></div>
                    </div>
                </div> `;
                    hideSwitches();
                    }
                    break;
            }
        }
        if(index == 1){
            switch(j){
                case 8:
                if(!subMenu){
                        tabs[index].innerHTML += `
                <div class="parent subMenu">
                    <div class="child">
                        <div class="key">
                            <div class="elm" onclick="showdsc('')">Hidden Refresh:</div>
                            <div class="elm" onclick="showdsc('')">Code Read Page Mode:</div>
                            <div class="elm" onclick="showdsc('')">Write Page Mode:</div>                        
                            <div class="elm" onclick="showdsc('Enables CPU to PCI write buffers, which allow data to be temporarily stored in buffers before writing the data. ')">CPU to PCI Write Buffers:</div>
                            <div class="elm" onclick="showdsc('')">PCI to DRAM Write Buffers:</div>                        
                            <div class="elm" onclick="showdsc('')">CPU to DRAM Write Buffers:</div>                        
                            <div class="elm" onclick="showdsc('')">Snoop Ahead:</div>                        
                            <div class="elm" onclick="showdsc('')">PCI Memory Burst Cycles:</div>
                            <div class="heading">${items[j-1].innerText}</div>                        
                        </div>
                        <div class="value">
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                            <div class="elm curly black"><span>disabled</span></div>                                     
                        </div>
                    </div>
                    <div class="child">
                        <div class="subchild">Item Specific Help</div>
                        <div class="subchild"></div>
                    </div>
                </div>`;
                    hideSwitches();
                    }
                    break;
                    case 5:
                    if(!subMenu){
                        tabs[index].innerHTML += `
                <div class="parent subMenu">
                    <div class="child">
                        <div class="key">
                            <div class="elm" onclick="showdsc('')">Serial Port A:</div>                      
                            <div class="elm" onclick="showdsc('')">Base I/O address/IRQ:</div>                      
                            <div class="elm" onclick="showdsc('')">Serial Port B:</div>                      
                            <div class="elm" onclick="showdsc('')">Parallel Port:</div>                      
                            <div class="elm" onclick="showdsc('')">&emsp;&emsp;Mode:</div>                      
                            <div class="elm" onclick="showdsc('')">&emsp;&emsp;Base I/O address:</div>                      
                            <div class="elm" onclick="showdsc('')">&emsp;&emsp;Interrupt:</div>
                            <br>                      
                            <div class="elm" onclick="showdsc('')">Diskette Controller:</div>                      
                            <div class="elm" onclick="showdsc('')">&emsp;&emsp;Base I/O address:</div> 
                            <br>                     
                            <div class="elm" onclick="showdsc('Enable support for Legacy Universal Serial Bus ')">Legacy USB Support:</div>                      
                            <div class="heading">${items[j-1].innerText}</div>
                        </div>
                        <div class="value">
                            <div class="elm curly black"><span>Enabled</span></div>                                     
                            <div class="elm curly black"><span>3F8/IRQ4</span></div>                                     
                            <div class="elm curly black"><span>OS Controlled</span></div>                                     
                            <div class="elm curly black"><span>User</span></div>                                     
                            <div class="elm curly black"><span>Bi-directional</span></div>                                     
                            <div class="elm curly black"><span>378</span></div>                                     
                            <div class="elm curly black"><span>IRQ5</span></div>  
                            <br>                                   
                            <div class="elm curly black"><span>Enabled</span></div>                                     
                            <div class="elm curly black"><span>Primary</span></div>  
                            <br>                                   
                            <div class="elm curly black"><span>Enabled</span></div>                                     
                        </div>
                    </div>
                    <div class="child">
                        <div class="subchild">Item Specific Help</div>
                        <div class="subchild"></div>
                    </div>
                </div>`;
                    hideSwitches();
                    }
                        break;
            }
        }
        if(index == 4){
            switch(j){
                case 1:
                    displayPanel("save configuration changes and exit now");
                    break;
                case 3:
                    displayPanel("load default configuration now");
                    break;
                case 5:
                    displayPanel("save configuration changes now");
                    break;
            }
        }
    }
}
}
// controlling using keyboard

// start panel
function displayPanel(msg){
    var bd = document.querySelector("body");
    var footer = document.querySelector(".footer");

    panel = document.createElement("div");
    panelFooter = document.createElement("div");

    panel.classList.add("panel");
    bd.append(panel);

    panelFooter.classList.add("panelFooter");
    footer.append(panelFooter);

    panel.innerHTML = `
    <div class="hd">setup confirmation</div>
    <div class="vf">
        <div class="qs">${msg}?</div><br>
        <div class="yn">
            <div class="curly">yes</div>    
            <div class="curly" style="background:black; color:white;">no</div>    
        </div>            
    </div>`;

    panelFooter.innerHTML = `
        <div class="sec">
            <div>space</div>
            <div>select</div>
        </div>
        <div class="sec">
            <div>enter</div>
            <div>accept</div>                    
        </div>`;
    insideTab = false;
    b = 0;
}
// end panel

// show description for every item
function showdsc(msg){
    if(itmSpcfcHelp){
        itmSpcfcHelp.innerHTML = msg;
    }
}
// show description
