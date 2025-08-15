(function(){
    var d=[
        "Y3JyZA==", //element id currently "crrd"
        "PHA+RGVzaWduZWQgYnkgPGEgaHJlZj0iaHR0cHM6Ly91cnN0YXJrLnZlcmNlbC5hcHAvIiB0YXJnZXQ9Il9ibGFuayJzdHlsZT0iYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwMCUsI0UwQjRGRiwjRDA4REZGIDUwJSwjRTBCNEZGIDc1JSwjRDA4REZGIDEwMCUpO2ZvbnQtd2VpZ2h0OjYwMDtiYWNrZ3JvdW5kLXNpemU6MjAwJSBhdXRvO2NvbG9yOiMwMDA7YmFja2dyb3VuZC1jbGlwOnRleHQ7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6dHJhbnNwYXJlbnQ7YW5pbWF0aW9uOmFuaW1hdGVkVGV4dEdyYWRpZW50IDEuNXMgbGluZWFyIGluZmluaXRlfUBrZXlmcmFtZXMgYW5pbWF0ZWRUZXh0R3JhZGllbnR7dG97YmFja2dyb3VuZC1wb3NpdGlvbjotMjAwJSBjZW50ZXI7fX0iPlN0YXJrPC9hPjwvcD4=", // x2st HTML+CSS 
        "PGRpdiBzdHlsZT0icG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMTJweCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigxMnB4KTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMCk7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3otaW5kZXg6OTk5OTk7Ij48ZGl2IGlkPSJhbGVydEJveCIgc3R5bGU9ImJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjg4KTtib3JkZXItcmFkaXVzOjEycHg7bWFyZ2luOjAgMS41ZW07Ym94LXNoYWRvdzowIDhweCAyMHB4IHJnYmEoMCwwLDAsMC4xMiksMCAxMnB4IDQwcHggcmdiYSgwLDAsMCwwLjIpO21heC13aWR0aDo1MDBweDt3aWR0aDo5MCU7cGFkZGluZzozMHB4O3RleHQtYWxpZ246Y2VudGVyO3RyYW5zZm9ybTpzY2FsZSgwLjg1KTtvcGFjaXR5OjA7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC41cyBlYXNlLG9wYWNpdHkgMC41cyBlYXNlOyI+PGgxIHN0eWxlPSJjb2xvcjojZmYxYTFhO2ZvbnQtc2l6ZToyOHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtnYXA6MTBweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxNXB4O3RleHQtc2hhZG93OjAgMCA4cHggcmdiYSgyNTUsMCwwLDAuNSk7Ij48c3BhbiBzdHlsZT0iZm9udC1zaXplOjMycHg7Ij4mIzk4ODg7PC9zcGFuPldBUk5JTkc8L2gxPjxicj48cCBzdHlsZT0iY29sb3I6IzMzMztmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoxLjU7bWFyZ2luOjAgMCAxMnB4IDA7Ij5UaGlzIHdlYnNpdGUgaGFzIGJlZW4gPHN0cm9uZyBzdHlsZT0iY29sb3I6I2ZmMWExYTsiPmxvY2tlZDwvc3Ryb25nPiBiZWNhdXNlIHRoZSBjcmVkaXQgb2YgdGhlIHdlYnNpdGUgZGV2ZWxvcGVyIGhhcyBiZWVuIHJlbW92ZWQuIFJlbW92aW5nIGRldmVsb3BlciBjcmVkaXQgaXMgY29uc2lkZXJlZCBkaXNyZXNwZWN0ZnVsIHRvIHRoZSBjcmVhdG9ycyB3aG8gaW52ZXN0ZWQgdGhlaXIgdGltZSBhbmQgc2tpbGxzLjwvcD48cCBzdHlsZT0iY29sb3I6IzMzMztmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoxLjU7bWFyZ2luOjAgMCAyMHB4IDA7Ij5UbyB1bmxvY2sgdGhlIHdlYnNpdGUsIGtpbmRseSByZXN0b3JlIHRoZSBjcmVkaXQgc2VjdGlvbiBhcyBpdCB3YXMgb3JpZ2luYWxseSBwbGFjZWQuIElmIHlvdSBuZWVkIGhlbHAgb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIGNvbnRhY3QgdGhlIHdlYnNpdGUgZGV2ZWxvcGVyLjwvcD48YSBocmVmPSJodHRwczovL3Vyc3RhcmsudmVyY2VsLmFwcCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQ6I2ZmMWExYTtjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO3BhZGRpbmc6MTJweCAyNXB4O2JvcmRlci1yYWRpdXM6OHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE2cHg7Ym94LXNoYWRvdzowIDRweCAxMHB4IHJnYmEoMjU1LDAsMCwwLjQpO3RyYW5zaXRpb246dHJhbnNmb3JtIDAuMnM7Ij5Db250YWN0IERldmVsb3BlcjwvYT48YnI+PGJyPjxocj48ZGl2PlNlY3VyaXR5IGJ5IDxzcGFuIGlkPSJjcnJkIj48YSBocmVmPSJodHRwczovL3Vyc3RhcmsudmVyY2VsLmFwcCIgc3R5bGU9ImJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMDAlLCNFMEI0RkYsI0QwOERGRiA1MCUsI0UwQjRGRiA3NSUsI0QwOERGRiAxMDAlKTtmb250LXdlaWdodDo2MDA7YmFja2dyb3VuZC1zaXplOjIwMCUgYXV0bztjb2xvcjojMDAwO2JhY2tncm91bmQtY2xpcDp0ZXh0Oy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOnRyYW5zcGFyZW50O2FuaW1hdGlvbjphbmltYXRlZFRleHRHcmFkaWVudCAxLjVzIGxpbmVhciBpbmZpbml0ZTt9QGtleWZyYW1lcyBhbmltYXRlZFRleHRHcmFkaWVudHt0b3tiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDAlIGNlbnRlcjt9fSI+U3Rhcms8L2E+PC9zcGFuPjwvZGl2PjwvZGl2PjxpbWcgc3JjPSJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFEL0FDd0FBQUFBQVFBQkFBQUNBRHM9IiBvbmxvYWQ9InRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS50cmFuc2Zvcm09J3NjYWxlKDEpJzt0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUub3BhY2l0eT0nMSc7IiBzdHlsZT0iZGlzcGxheTpub25lOyI+PC9kaXY+", // err page HTML+CSS
        "Q3JpdGljYWwgZWxlbWVudCBtaXNzaW5n", //consol err 1
        "cHV0IGl0IGJhY2sgdG8gdW5sb2NrIHRoZSB3ZWJzaXRl" //consol err 2
    ];
    function x(s){return atob(s);}
    var id = x(d[0]),
        x2st = x(d[1]),
        vzw_48f = x(d[2]);
        crr = x(d[3]);
        crr1 = x(d[4]);
    function setC(){
        var e = document.getElementById(id);
        if(e){
            e.innerHTML = x2st;
        }
    }
    setC();
    setInterval(function(){
        var e = document.getElementById(id);
        if(!e){
            document.body.innerHTML = vzw_48f;
            throw new Error(crr+" '"+id+ "' " +crr1);
        }
        if(e.innerHTML.trim() !== x2st.trim()){
            e.innerHTML = x2st;
        }
    }, 700);
})();
