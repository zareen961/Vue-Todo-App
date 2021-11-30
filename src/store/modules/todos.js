import { v4 as uuidv4 } from 'uuid'
import { TASKS } from '../../constant/todoData'

const state = {
    todos: [],
}

const getters = {
    allTodos: (state) => state.todos,
}

const actions = {
    fetchTodos({ commit }) {
        const { data } = TASKS
        commit('setTodos', data)
    },
    addTodo({ commit }, title) {
        commit('newTodo', { id: uuidv4(), name: title, status: 'todo' })
    },
    deleteTodo({ commit }, id) {
        commit('removeTodo', id)
    },
    completeTodo({ commit }, id) {
        commit('completeTodo', id)
    },
    toggleTodo({ commit }, id) {
        commit('toggleTodo', id)
    },
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
        (state.todos = state.todos.filter((todo) => todo.id !== id)),
    completeTodo: (state, id) =>
        (state.todos = state.todos.map((task) =>
            task.id !== id ? task : { ...task, status: 'done' }
        )),
    toggleTodo: (state, id) =>
        (state.todos = state.todos.map((task) =>
            task.id !== id
                ? task
                : { ...task, status: task.status === 'done' ? 'todo' : 'done' }
        )),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
