(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),l=a.n(o),i=(a(61),a(25)),s=a(24),c=a(36),m=a(332),u=a(22),d=a(333),h=a(52),g=function(){return r.a.createElement(c.a,{id:"nav",maxWidth:1080,marginY:"0",marginX:"auto",paddingX:0,borderBottom:"default",position:"sticky",alignItems:"center"},r.a.createElement(c.a,{display:"flex",alignItems:"center",height:"56px"},r.a.createElement(c.a,{flex:"1",textTransform:"uppercase"},r.a.createElement(i.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(m.a,{size:600,textTransform:"none",marginRight:32},"ctlstore")),r.a.createElement(i.b,{to:"/get-started",style:{textDecoration:"none",color:"#557490"}},r.a.createElement(u.a,{marginRight:16,color:"neutral",fontWeight:600,as:d.a},"Get Started")),r.a.createElement(d.a,{href:"https://godoc.org/github.com/segmentio/ctlstore",marginRight:16,color:"neutral",textDecoration:"none",fontWeight:600},"go docs"),r.a.createElement(d.a,{href:"https://github.com/segmentio/ctlstore",marginRight:16,color:"neutral",textDecoration:"none",fontWeight:600},"GitHub")),r.a.createElement(c.a,null,r.a.createElement(h.a,{href:"https://github.com/segmentio/ctlstore","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star segmentio/ctlstore on GitHub"},"Star"))))},p=a(51),f=a(334),b=a(11),E=a.n(b),y=a(335),w="\nlinear-gradient(-180deg,\n  ".concat(p.a.palette.green.lightest," 20%,\n  ").concat(p.a.palette.green.light," 30%,\n  ").concat(p.a.palette.green.light," 80%\n)\n"),v=function(){return r.a.createElement(y.a,{width:700,backgroundColor:"#425A70",elevation:0},r.a.createElement(c.a,{height:30,backgroundColor:"#66788A",borderTopLeftRadius:5,borderTopRightRadius:5,display:"flex",alignItems:"center"},r.a.createElement(c.a,{backgroundColor:"#425A70",height:15,width:15,borderRadius:"50%",marginLeft:10}),r.a.createElement(c.a,{backgroundColor:"#425A70",height:15,width:15,borderRadius:"50%",marginX:5}),r.a.createElement(c.a,{backgroundColor:"#425A70",height:15,width:15,borderRadius:"50%"})),r.a.createElement(c.a,{paddingX:12,id:"terminal"},r.a.createElement(E.a,null,'\n\n# upsert a row in the opts table for a customer\ncurl -d @- http://ctlstore-executive/families/config/mutations <<EOF\n{\n  "mutations": [\n    {\n      "table": "opts",\n      "delete": false,\n      "values": {\n        "customer_id": "f9xirj2ldkdjfs",\n        "enable_xyz": 1\n      }\n    }  \n  ],\n}\nEOF\n')))},x=function(){return r.a.createElement(c.a,{id:"hero",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginY:32,background:w},r.a.createElement(f.a,{size:900,fontWeight:600,marginBottom:8},"ctlstore"),r.a.createElement(f.a,{size:600,marginBottom:32},"Push your control data to the edge."),r.a.createElement(v,null),r.a.createElement(c.a,{width:700,id:"golang"},r.a.createElement(E.a,null,'\n// data plane service reads config value from local DB\nfunc handleMessage(ctx context.Context, msg Message) error {\n  type Options struct {\n    CustomerID string `ctlstore:"customer_id"`\n    EnableXYZ  int64  `ctlstore:"enable_xyz"`\n  }\n\n  var reader := ctlstore.Reader()\n  var opts Options\n  \n  customer = msg.CustomerID // e.g. "f9xirj2ldkdjfs" \n  found, err := reader.GetRowByKey(ctx, &opts, "config", "opts", customer)\n  if err != nil {\n    return err\n  }\n  if found && opts.EnableXYZ {\n    // feature XYZ is on for the customer\n  }\n}\n\n')))},B=function(){return r.a.createElement(c.a,null,r.a.createElement(x,null),r.a.createElement(c.a,{display:"flex",justifyContent:"center",textAlign:"center",background:p.a.palette.neutral.dark},r.a.createElement(c.a,{width:600,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginRight:36},r.a.createElement(f.a,{size:900,color:"white",marginBottom:16},"Your app shouldn't crash when your database falls over"),r.a.createElement(u.a,{color:"white",size:500},"ctlstore replicates data from a central system of record to a local sqlite database that lives on the same machines as your app.  Your app can query the local database even if your system of record goes down.")),r.a.createElement(c.a,{textAlign:"left",marginTop:36},r.a.createElement(E.a,null,'\n  package store\n\n  import "github.com/segmentio/ctlstore"\n\n  type MetadataRow struct {\n    Key string `ctlstore:"key"`\n    Val string `ctlstore:"val"`\n  }\n\n  // FindMetadata fetches metadata from the local db\n  func (db DB) FindMetadata(ctx context.Context) (*MetadataRow, error) {\n    var val MetadataRow\n    reader := ctlstore.Reader()\n    meta := new(MetadataRow)\n    _, err := reader.GetRowByKey(ctx, meta, "resources", "metadata", "rs_123")\n    return meta, err \n  }\n\n                '))),r.a.createElement(c.a,{display:"flex",justifyContent:"center",textAlign:"center",background:p.a.palette.neutral.dark},r.a.createElement(c.a,{textAlign:"left",marginTop:20},r.a.createElement(E.a,null,'\n  package flags\n\n  import "github.com/segmentio/ctlstore"\n\n  type FlagRow struct {\n    Name    string `ctlstore:"flag_name"`\n    Users   []byte `ctlstore:"enabled_users"`\n  }\n\n  func Render(ctx context.Content, userID string) error {\n    reader := ctlstore.Reader()\n    row := new(FlagRow) \n    ok, err := reader.GetRowByKey(ctx, row, "config", "flags", "new_ui")\n    if err != nil {\n      return err\n    }\n    newUIEnabled := false\n    if ok {\n        m := make(map[string]bool)\n        json.Unmarshal(&m, row.Users)\n        if m[userID] {\n          newUIEnabled = true\n        }\n    } \n    // render based on newUIEnabled\n  }\n                ')),r.a.createElement(c.a,{width:600,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginLeft:36},r.a.createElement(f.a,{size:900,color:"white",marginBottom:20},"Use your ctlstore data to drive logic and flow."),r.a.createElement(u.a,{color:"white",marginBottom:20,size:500},"ctlstore is a great fit for control data like feature flags. Your app can query for this data to control business logic without reaching out to a remote database."))))},z=a(338),T=a(340),k=a(336);var R=a(337),A=a(339);var D=[{label:"Introduction",path:"/introduction",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Introduction"),r.a.createElement(k.a,{size:500,marginBottom:32},"Ctlstore is a distributed, multi-tenant data store that replicates its data from a central system of record (SoR) to a local database (LDB) that lives on each server in the fleet. Its design enables data plane components to withstand infrastructure downtime due to those components reading control data from the LDB instead of an external database."),r.a.createElement(k.a,{size:500,marginBottom:32},"Because the read path is always local, it boasts fast access times (typically in the microsecond range). If the SoR becomes unavailable, the data plane components will continue to process data because they are reading from their local copy; when the SoR becomes available, the replication process will resume."),r.a.createElement(k.a,{size:500,marginBottom:32},"Ctlstore is meant to enable reliable access to control data. This ",r.a.createElement(d.a,{size:500,href:"https://segment.com/blog/separating-our-data-and-control-planes-with-ctlstore/"},"blog post")," goes into detail about ctlstore, some of which will also live in this guide. If you\u2019re curious why we built this, Segment co-founder Calvin French-Owen ",r.a.createElement(d.a,{size:500,href:"https://vimeo.com/293246627"},"spoke about our motivations for building ctlstore")," at Synapse 2018."),r.a.createElement(k.a,{size:500,marginBottom:32},"Finally, we wanted to share ctlstore with the community as soon as possible.  As time goes on we hope to expand this guide, the documentation in general, add API references, and so on.  Thanks for your patience!"))}},{label:"Concepts",path:"/concepts",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Concepts"),r.a.createElement(k.a,{size:500,marginBottom:32},"The ctlstore data lives in a SoR called the ctldb (control database). The ctldb is an AWS Aurora database."),r.a.createElement(k.a,{size:500,marginBottom:32},"Writes to the ctldb are guarded by a service called the executive. The executive\u2019s sole responsibility is to expose an HTTP API that allows writers to mutate the ctldb in a controlled fashion. Each mutation performed through this API mutates the table specified and then appends generated SQL into a special table called the ledger. The ledger is an ordered list of mutations that are used to build the LDB on each container instance."),r.a.createElement(k.a,{size:500,marginBottom:32},"Each container instance runs a program called the reflector. The purpose of the reflector is to continually poll the ctldb ledger and, apply updates from the ledger to the LDB. This LDB is what data plane components will query during normal operation for control data."),r.a.createElement(k.a,{size:500,marginBottom:32},"Each ledger entry in the ctldb has a unique sequence number. As each ledger entry is applied to the LDB, the sequence from that entry is transactionally set in a special metadata table. Because the LDB stores its position in the ledger, the reflector can easily restart after a crash."),r.a.createElement(k.a,{size:500,marginBottom:32},"There is an additional component called the supervisor. The supervisor continually builds its own LDB, much like a reflector, but it periodically pushes its LDB to S3. This LDB in S3 is a ctlstore snapshot. Because the ctldb ledger will have a larger number of rows, new container instances would take too long to get their LDBs up to date if they were to consume the ledger from the beginning; they instead query S3 to get the most recent snapshot and start from the ledger position recorded in the snapshot LDB. This allows new container instances to become up to date in minutes versus hours."))}},{label:"Try It Out",path:"/try-it-out",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Try It Out"),r.a.createElement(k.a,{size:500,marginBottom:32},"The ctlstore repo sports a docker compose environment that puts all of these components we\u2019ve discussed (and more) into action. To stand up the environment:",r.a.createElement(E.a,null,"$ docker-compose -f docker-compose-example.yml up -d")),r.a.createElement(k.a,{size:500,marginBottom:32},"The components it starts:",r.a.createElement(R.a,{size:500},r.a.createElement(A.a,null,"executive: guards write access to the ctldb"),r.a.createElement(A.a,null,"supervisor: periodically creates a backup of the LDB on disk"),r.a.createElement(A.a,null,"mysql: this is the SoR for ctlstore (in production this would live in Aurora)"),r.a.createElement(A.a,null,"reflector: writes to the LDB on a shared volume"),r.a.createElement(A.a,null,"sidecar: exposes the ctlstore read API over HTTP (useful for services which are not written in Go)"),r.a.createElement(A.a,null,"heartbeat: a program that mutates a heartbeats table periodically via the executive API"))),r.a.createElement(k.a,null,"Eventually you should see the heartbeats show up in the local database:",r.a.createElement(E.a,null,'\n$ docker-compose -f docker-compose-example.yml exec reflector sqlite3 /var/spool/ctlstore/ldb.db\n\nSQLite version 3.28.0 2019-04-16 19:49:53\nEnter ".help" for usage hints.\nsqlite> select * from ctlstore___heartbeats;\nheartbeat|1563208201658223400\nsqlite>\n                ')))}},{label:"Tables",path:"/tables",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Tables"),r.a.createElement(k.a,{size:500,marginBottom:32},"Ctlstore is a RDBMS. All control data in the system is stored in tables. Part of the multi-tenant design introduces the concept of a table family. The family is effectively a namespace for tables. Because there is one central SoR, the family concept helps to prevent table name collisions. Thus, when data is either read or written, it is required that both the family and the table name be specified."),r.a.createElement(k.a,{size:500,marginBottom:32},"In the ctldb, the tables that contain the mutations are named using the format",r.a.createElement(E.a,null,"${family}___${table}")),r.a.createElement(k.a,{color:"muted",size:500,marginBottom:32,fontStyle:"italic"},"Note that the readers will not query the database directory. They will use the reader library instead, which hides this complexity and also enforces certain access patterns."))}},{label:"Writers",path:"/writers",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Writers"),r.a.createElement(k.a,{size:500,marginBottom:32},"All ctlstore mutations must happen through the executive HTTP API. Programs that mutate through this API are known as writers. Most of the time the writer will be taking control from external SoRs (application databases) and converting those to executive mutations. Before that can happen, though, a little bit of setup is required (each step is an executive endpoint):"),r.a.createElement(k.a,{size:500,marginBottom:32},"1. Create the table family",r.a.createElement(E.a,null,"\n$ curl -v -XPOST http://ctlstore-executive/families/myfamily                \n                ")),r.a.createElement(k.a,{size:500,marginBottom:32},"2. Create the table with a schema",r.a.createElement(E.a,null,'\n\ncurl -XPOST -d @- http://ctlstore-executive/families/myfamily/tables/mytable <<EOF\n{\n    "fields": [\n        ["field_1", "string"],\n        ["field_2", "binary"]\n    ],\n    "keyFields": ["field_1"]\n}\nEOF\n                ')),r.a.createElement(k.a,{size:500,marginBottom:32},"3. Register the writer with ctlstore (each writer has a name and a secret)",r.a.createElement(E.a,null,'\n$ curl -XPOST -d "SECRET" http://ctlstore-executive/writers/my-writer                \n                ')),r.a.createElement(k.a,{size:500,marginBottom:32},"4. You can now send mutations using those writer creds",r.a.createElement(E.a,null,'\ncurl -d @- http://ctlstore-executive/families/myfamily/mutations <<EOF\n{\n  "mutations": [\n    {\n      "table": "mytable",\n      "delete": false,\n      "values": {\n        "field_1": "foo",\n        "field_2": "Zm9vYmFy"\n      }\n    }  \n  ],\n}\nEOF\n')))}},{label:"Readers",path:"/readers",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Readers"),r.a.createElement(k.a,{size:500,marginBottom:32},"Go programs can use the github.com/segmentio/ctlstore package to read from the LDB. Sensible defaults allow a program to:",r.a.createElement(E.a,{className:"golang"},"reader, err := ctlstore.Reader()")),r.a.createElement(k.a,{size:500,marginBottom:32},"Data inside of the LDB can be unmarshaled into a struct via the use of special struct property tags:",r.a.createElement(E.a,{className:"golang"},'type AppRow struct {\n  UserID string `ctlstore:"user_id"`\n  PubKey string `ctlstore:"public_key"`\n}')),r.a.createElement(k.a,{size:500,marginBottom:32},"The ctlstore tags instruct the reader how to map table columns to struct properties."),r.a.createElement(k.a,{size:500,marginBottom:32},"Then the read is performed like this:",r.a.createElement(E.a,{className:"golang"},'var out AppRow\nkey := []interface{}{ "user@example.com" }\nerr := reader.GetRowByPrimaryKey(ctx, &out, "my-family", "my-table", key...)\n')),r.a.createElement(k.a,{size:500,marginBottom:32},"Note that it\u2019s important to not ignore error values returned from this API. The most common error occurs when the reader cannot find the LDB due to a misconfigured deploy (missing volume mount, etc)."))}},{label:"Sidecar",path:"/sidecar",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Sidecar"),r.a.createElement(k.a,{size:500,marginBottom:32},"Not all data plane components are written in Go, though, and to support these programs it\u2019s recommended to use the ctlstore sidecar. The sidecar is a very simple Go program that composes an LDB Reader and maps each method of its API to an HTTP endpoint. Any programming environment that can speak HTTP can then read from ctlstore using the sidecar."),r.a.createElement(k.a,{size:500,marginBottom:32},"The following example shows how the sidecar might be used to fetch a row of data:",r.a.createElement(E.a,{className:"golang"},'curl -d \'{"key": [{"value":"heartbeat"}]}}\' \\\n    http://ctlstore-sidecar/get-row-by-key/ctlstore/heartbeats\n                \n{\n    "name": "heartbeat",\n    "value": 1563217544067280400\n}\n')))}},{label:"Tests",path:"/tests",component:function(){return r.a.createElement(c.a,null,r.a.createElement(f.a,{is:"h1",size:900,textAlign:"center",marginBottom:32},"Tests"),r.a.createElement(k.a,{size:500,marginBottom:32},"To run the test suite, it\u2019s required to first spin up a mysql database container:",r.a.createElement(E.a,null,"$ docker-compose up -d mysql")),r.a.createElement(k.a,{size:500,marginBottom:32},"Afterwards, you can run the tests by:",r.a.createElement(E.a,null,"$ make test")))}}];function I(e){var t=e.match,a=window.location.pathname;return r.a.createElement(z.a,{flex:"0 0 200px",paddingY:32,marginBottom:16,marginRight:24},D.map(function(e){return r.a.createElement(T.a,{size:400,id:e.label,is:i.b,to:"".concat(t.url).concat(e.path),isSelected:a==="".concat(t.url).concat(e.path)},e.label)}))}var S=function(e){var t=e.match;return r.a.createElement(c.a,{display:"flex",maxWidth:1080,marginX:"auto",minHeight:"calc(100vh - 57px)"},r.a.createElement(I,{match:t}),r.a.createElement(c.a,{flex:1,paddingY:36,paddingX:48,borderLeft:"muted"},r.a.createElement(s.d,null,D.map(function(e){return r.a.createElement(s.b,{key:e.label,exact:!0,path:"".concat(t.path).concat(e.path),component:e.component})}),r.a.createElement(s.a,{to:"".concat(t.path,"/introduction")}))))};var C=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{minHeight:"100vh"},r.a.createElement(g,null),r.a.createElement(s.b,{path:"/",exact:!0,component:B}),r.a.createElement(s.b,{path:"/get-started",component:S}),r.a.createElement(s.b,{component:c.a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(327)},61:function(e,t,a){}},[[56,1,2]]]);