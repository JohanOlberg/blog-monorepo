import "./UserChangeRoles.css";
import type{ UserRoleOption, userRoles } from "../model/user.types.js";

type rolesSelectorProps = {
    roles: UserRoleOption[]
    currentRoleValue?: userRoles;
    mode: "CREATE" | "EDIT"
    isSaving: boolean
    onChangeRole: (data:userRoles)=>void
};

export function UserChangeRoles({ currentRoleValue, mode, isSaving, onChangeRole, roles}: rolesSelectorProps) {
  
const otherRoles = roles.filter(
    (role) => role.value !== currentRoleValue
  ) as UserRoleOption[];


const currentRole = roles.filter((role)=> role.value === currentRoleValue)  

//const currentRole = roles[currentRoleValue]  

function handleChangeRoles(role:userRoles){
    onChangeRole(role)
}



  return (
    <section className="category-widget">
      <header className="category-widget__header">
        <span>Roles</span>
        <strong>Content Identity</strong>
      </header>

      
      {currentRole && currentRole.length > 0 ? (
      currentRole?.map((current) => (
        <div className="category-current">
          <div className="category-main-info">
            <span
              className={ `category-color ${current.className}` }
              
            />

            <div>
              <strong>{current.value}</strong>
              <small>Current Role</small>
            </div>
          </div>

        </div>
      ))):(
        <div className="category-current">
          <div className="category-main-info">
            <span className="category-color category-color--empty" />

            <div>
              <strong>No category selected</strong>
              <small>Select a category below</small>
            </div>
          </div>
        </div>)}

      <div className="category-list">
        {otherRoles.map((roles) => (
            <article className="category-item" key={roles.value}>
              <div className="category-main-info">
                <span
                  className= { `category-color ${roles.className}` }
                />

                <div>
                  <strong>{roles.value}</strong>
                  <small>{roles.description}</small>
                </div>
              </div>

              <button
                className="category-small-btn"
                onClick={() => handleChangeRoles(roles.value)}
                disabled={isSaving}
              >
                Select
              </button>
            </article>
          ))}
      </div>

      
    </section>
  );
}