import Agent from '../models/Agent.js'

export function index(req, res, next) {
    res.render('new-agent')
}

export async function postNew(req, res, next) {
    try {
        const { name, age } = req.body
        const userId = req.session.userId

        // TO-DO validaciones

        // creo una instancia de agente en memoria
        const agent = new Agent({ name, age, owner: userId })  // crea el agente en memoria
        
        // guardo al agente en la base de datos
        await agent.save()

        res.redirect('/')

    } catch (error) {
        next(error)
    }
}

export async function deleteAgent(req, res, next) {
    try {
      const userId = req.session.userId
      const agentId = req.params.agentId
  
      await Agent.deleteOne({ _id: agentId, owner: userId })
  
      res.redirect('/')
  
    } catch (error) {
      next(error)
    }
  }