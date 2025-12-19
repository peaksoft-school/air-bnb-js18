import { useState } from "react"
import { Button } from "./components/ui/button"
import { Modal } from "./components/ui/modal"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-10">
      <Button onClick={() => setOpen(true)}>
        Sign in
      </Button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Delete item"
        description="Are you sure you want to delete this item?"
        confirmText="Delete"
        cancelText="Cancel"
      >
        <p>Hello</p>
      </Modal>
    </div>
  )
}

export default App
