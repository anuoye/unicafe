import { useState } from 'react'
import { usePopper } from 'react-popper';

const App = () => {
  // save clicks of each button to its own state

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
   const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "offset", options: { offset: [10, 10] } }],
  });


 // const [good, setGood] = useState(0)
  //const [neutral, setNeutral] = useState(0)
  //const [bad, setBad] = useState(0)

  return (
    <div>
      <button
        ref={setReferenceElement}
        
      >
        Feedback?
      </button>

      <div ref={setPopperElement}

 {...attributes.popper}>
        Feedback Widget
    </div>



      <div
        
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <form>
          <label for="feedback">How can we improve?</label>
          <div>
            <textarea id="feedback"></textarea>
            <button>
            
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default App