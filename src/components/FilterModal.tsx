import { categories } from '@/constants'
import { Button, Modal } from 'react-bootstrap'

import styles from './FilterModal.module.css'

type FilterModalProps = {
  handleClose: () => void
  show: boolean
  selectedCategories: string[]
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>
}

export default function FilterModal({
  handleClose,
  show,
  selectedCategories,
  setSelectedCategories,
}: FilterModalProps) {
  // Adds or removes a category from the selected list.
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                id={category}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.doneBtn} onClick={handleClose}>
          Done
        </button>
      </Modal.Footer>
    </Modal>
  )
}
