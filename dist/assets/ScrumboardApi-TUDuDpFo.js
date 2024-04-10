import{aq as s,a8 as c,cT as i}from"./index-yI6jwdC7.js";function l(a){return a=a||{},s.defaults(a,{id:s.uniqueId(),title:"Untitled Board",description:"",icon:"heroicons-outline:template",lastActivity:new Date,members:[],settings:{subscribed:!0,cardCoverImages:!0},lists:[],labels:[]})}const m=(a,r,d)=>{const o=Array.from(a),[e]=o.splice(r,1);return o.splice(d,0,e),o},p=(a,r,d)=>{const o=s.find(a,{id:r.droppableId}),e=s.find(a,{id:d==null?void 0:d.droppableId}),t=o.cards[r.index];if(r.droppableId===(d==null?void 0:d.droppableId)){const u=m(o.cards,r.index,d.index);return a.map(b=>(b.id===r.droppableId&&(b.cards=u),b))}return o.cards.splice(r.index,1),e.cards.splice(d==null?void 0:d.index,0,t),a.map(u=>u.id===r.droppableId?o:u.id===(d==null?void 0:d.droppableId)?e:u)},n=["scrumboard_members","scrumboard_board_lists","scrumboard_member","scrumboard_board_list","scrumboard_board_labels","scrumboard_board_label","scrumboard_board_cards","scrumboard_board_card","scrumboard_boards","scrumboard_board"],_=c.enhanceEndpoints({addTagTypes:n}).injectEndpoints({endpoints:a=>({getScrumboardMembers:a.query({query:()=>({url:"/mock-api/scrumboard/members"}),providesTags:["scrumboard_members"]}),createScrumboardMember:a.mutation({query:r=>({url:"/mock-api/scrumboard/members",method:"POST",data:r}),invalidatesTags:["scrumboard_members"]}),getScrumboardMember:a.query({query:r=>({url:`/mock-api/scrumboard/members/${r}`}),providesTags:["scrumboard_member"]}),updateScrumboardMember:a.mutation({query:r=>({url:`/mock-api/scrumboard/members/${r.id}`,method:"PUT",data:r}),invalidatesTags:["scrumboard_member"]}),deleteScrumboardMember:a.mutation({query:r=>({url:`/mock-api/scrumboard/members/${r}`,method:"DELETE"}),invalidatesTags:["scrumboard_members"]}),getScrumboardBoardLists:a.query({query:r=>({url:`/mock-api/scrumboard/boards/${r}/lists`}),providesTags:["scrumboard_board_lists"]}),createScrumboardBoardList:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/lists`,method:"POST",data:r.list}),invalidatesTags:["scrumboard_board_lists","scrumboard_board"]}),getScrumboardBoardList:a.query({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/lists/${r.listId}`}),providesTags:["scrumboard_board_lists","scrumboard_board_list"]}),updateScrumboardBoardList:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/lists/${r.list.id}`,method:"PUT",data:r.list}),invalidatesTags:["scrumboard_board_lists","scrumboard_board_list"]}),deleteScrumboardBoardList:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/lists/${r.listId}`,method:"DELETE"}),invalidatesTags:["scrumboard_board_lists","scrumboard_board"]}),getScrumboardBoardLabels:a.query({query:r=>({url:`/mock-api/scrumboard/boards/${r}/labels`}),providesTags:["scrumboard_board_labels"]}),createScrumboardBoardLabel:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/labels`,method:"POST",data:r.label}),invalidatesTags:["scrumboard_board_labels"]}),getScrumboardBoardLabel:a.query({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/labels/${r.labelId}`}),providesTags:["scrumboard_board_label"]}),updateScrumboardBoardLabel:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/labels/${r.label.id}`,method:"PUT",data:r.label}),invalidatesTags:["scrumboard_board_label"]}),deleteScrumboardBoardLabel:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/labels/${r.labelId}`,method:"DELETE"}),invalidatesTags:["scrumboard_board_labels"]}),getScrumboardBoardCards:a.query({query:r=>({url:`/mock-api/scrumboard/boards/${r}/cards`}),providesTags:["scrumboard_board_cards"]}),createScrumboardBoardCard:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/lists/${r.listId}/cards`,method:"POST",data:i(r.card)}),invalidatesTags:["scrumboard_board_cards","scrumboard_board"]}),updateScrumboardBoardCard:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/cards/${r.card.id}`,method:"PUT",data:r.card}),invalidatesTags:["scrumboard_board_cards"]}),deleteScrumboardBoardCard:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.boardId}/cards/${r.cardId}`,method:"DELETE"}),invalidatesTags:["scrumboard_board_cards"]}),getScrumboardBoards:a.query({query:()=>({url:"/mock-api/scrumboard/boards"}),providesTags:["scrumboard_boards"]}),createScrumboardBoard:a.mutation({query:r=>({url:"/mock-api/scrumboard/boards",method:"POST",data:l(r)}),invalidatesTags:["scrumboard_boards","scrumboard_board"]}),getScrumboardBoard:a.query({query:r=>({url:`/mock-api/scrumboard/boards/${r}`}),providesTags:["scrumboard_board"]}),updateScrumboardBoard:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r.id}`,method:"PUT",data:r}),invalidatesTags:["scrumboard_board","scrumboard_boards"]}),deleteScrumboardBoard:a.mutation({query:r=>({url:`/mock-api/scrumboard/boards/${r}`,method:"DELETE"}),invalidatesTags:["scrumboard_boards"]}),updateScrumboardBoardListOrder:a.mutation({query:r=>{const{orderResult:d,board:o}=r,e=m(s.merge([],o.lists),d.source.index,d.destination.index);return{url:`/mock-api/scrumboard/boards/${o.id}`,method:"PUT",data:{lists:e}}},invalidatesTags:["scrumboard_boards","scrumboard_board"]}),updateScrumboardBoardCardOrder:a.mutation({query:r=>{const{orderResult:d,board:o}=r,e=p(s.merge([],o.lists),d.source,d.destination);return{url:`/mock-api/scrumboard/boards/${o.id}`,method:"PUT",data:{lists:e}}},invalidatesTags:["scrumboard_board_list","scrumboard_board"]})}),overrideExisting:!1}),{useGetScrumboardMembersQuery:T,useCreateScrumboardMemberMutation:B,useGetScrumboardBoardListsQuery:y,useCreateScrumboardBoardListMutation:v,useGetScrumboardMemberQuery:$,useUpdateScrumboardMemberMutation:M,useDeleteScrumboardMemberMutation:g,useGetScrumboardBoardListQuery:k,useUpdateScrumboardBoardListMutation:L,useDeleteScrumboardBoardListMutation:I,useGetScrumboardBoardLabelsQuery:q,useCreateScrumboardBoardLabelMutation:h,useGetScrumboardBoardLabelQuery:E,useUpdateScrumboardBoardLabelMutation:C,useDeleteScrumboardBoardLabelMutation:U,useGetScrumboardBoardCardsQuery:f,useCreateScrumboardBoardCardMutation:P,useUpdateScrumboardBoardCardMutation:D,useDeleteScrumboardBoardCardMutation:x,useGetScrumboardBoardsQuery:Q,useCreateScrumboardBoardMutation:G,useGetScrumboardBoardQuery:O,useUpdateScrumboardBoardMutation:j,useDeleteScrumboardBoardMutation:R,useUpdateScrumboardBoardListOrderMutation:w,useUpdateScrumboardBoardCardOrderMutation:z}=_;export{P as a,q as b,O as c,f as d,T as e,I as f,L as g,y as h,D as i,x as j,j as k,R as l,w as m,z as n,G as o,Q as p,v as u};
