import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

// 解構props的屬性名，用{屬姓名}包起來
// 
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit ,editTodo}) {
    return (
        // 檢查todo.isEdit是否為修改狀態

        todo.isEdit
            // 會編輯(isEdit為true)執行<EditForm/>

            ? <EditForm todo={todo} editTodo={editTodo} />
            // 新增一個completed類別規則
            // 使用反引號+三元運算子檢查isCompleted
            // 如果為真=>套用completed類別規則
            // 如果為否=>取消completed類別規則=>""

            // 沒編輯(isEdit為false)執行下面程式碼
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`} >
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                {/* 加入icons */}
                <div>
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: "pointer" }} />

                    {/* 刪除按鈕 */}
                    <MdDelete

                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                    />
                </div>

            </div>
    )
}

export default Todo