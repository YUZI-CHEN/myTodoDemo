import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
    // 因為有n個todo，所以使用陣列存取
    //  const[todos,setTodos]=useState(["List1","List2",]);
    // 因為陣列需要key屬性，所以要改成陣列物件，加上id
    // const [todos, setTodos] = useState([
    //     { const: "List1", id: Math.random() },
    //     { const: "List2", id: Math.random() },

    // ]);

    // 因為要判定todo是否被點擊，所以要增加一個標記屬性=>isCompleted
    // isCompleted:false=>預設值false為未完成
    //新增陣列屬性isEdit=>透過屬性判別是否編輯狀態
    // 如果不需要資料可以使用空字串
    const [todos, setTodos] = useState([
        { const: "List1", id: Math.random(), isCompleted: false, isEdit: false },
        { const: "List2", id: Math.random(), isCompleted: false, isEdit: false },

    ]);

    // 建立加入新的todo內容
    // 1. 使用...其餘運算子來保留原陣列內容
    // 2. 再加入新的物件內容
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false ,isEdit:false}])
    }
    // 建立刪除todo函式
    const deleteTodo = (id) => {
        // 使用filter方法找出被刪除的todo
        setTodos(todos.filter((todo) => {
            // 檢查目前的id是否為被刪除的id
            // 如果不是，則保留
            return todo.id !== id
        }))

    }
    // 建立雙向(toggle)切換「完成與取消」的函式

    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id

                // 檢查被點擊id是否跟目前陣列中的id一樣
                // 如果是=>1.先取出todo 2.將isCompleted屬性值反向處理(true=>false/false=>true)
                ? { ...todo, isCompleted: !todo.isCompleted }
                // 如果不是=>維持todo操作
                : todo
        }))
    }
    // 建立是否修改的函式(雙向)
    // toggle雙向操作
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            //1. 逐筆檢查目前的todo.id是否等於被修改的id
            //2.Yes=>1.取出todo資料 2.修改isEdit屬性值為反向
            // No=>todo不變


            // 如果id有改變就?，沒有就維持:todo資料
            // 三元運算值寫法
            // 如果不複雜就用三元運算值寫法
            return todo.id === id

                ? { ...todo, isEdit: !todo.isEdit }
                : todo

            // if-else寫法
            // if(todo.id===id){
            //     return{...todo,isEdit:!todo.isEdit}

            // }else{
            //     return todo
            // }



        }))
    }

    // 建立完成修改的函式(按下完成的動作)
    // 1.異動content為新的內容
    // 2.isEdit改回false

    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {

            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false}
                : todo
        }))

    }
    return (
        <div className="wrapper">
            <h1>帶辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        // 屬性名稱跟傳送名稱名子一樣
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo} />


                })
            }

        </div>
    )
}
export default TodoWrapper