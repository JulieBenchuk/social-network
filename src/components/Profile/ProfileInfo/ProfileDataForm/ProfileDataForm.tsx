import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../../common/Forms-control/FormsControl";
import {ContactsType} from "../../../../api/api";
import s from "./ProfileDataForm.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faLink, faMagnifyingGlass, faPerson, faSave} from "@fortawesome/free-solid-svg-icons";

export type ProfileDataFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormDataType>> = ({
                                                                                          handleSubmit,
                                                                                          initialValues, error
                                                                                      }) => {
    return (
        <div className={s.profileDataForm}>
            <form onSubmit={handleSubmit}>

                    <div className={s.dataItem}>
                        <FontAwesomeIcon icon={faPerson}/>
                        <b> Full name: </b>
                        <Field placeholder="full name" name={"fullName"} component={Input}/>
                    </div>

                    <div className={s.dataItem}>
                        <FontAwesomeIcon icon={faAddressCard}/>
                        <b> About me: </b>
                        <Field placeholder="about me" name={"aboutMe"} component={Textarea} />
                    </div>

                    <div className={s.dataItem}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <b> Looking for a job: </b>
                        <Field name={"lookingForAJob"} component={Input} type={"checkbox"} className={s.checkbox}/>
                    </div>

                    <div className={s.dataItem}>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                        <b> My skills: </b>
                        <Field placeholder="my skills" name={"lookingForAJobDescription"} component={Textarea}/>
                    </div>

                    <div className={s.dataItem}>
                        <FontAwesomeIcon icon={faLink}/>
                        <b> Contacts: </b>

                        <div className={s.contacts}>
                            {initialValues.contacts && Object.keys(initialValues.contacts).map(key => {
                                return <div key={key}>
                                    <b>{key}:</b>
                                    <Field placeholder={key} name={"contacts." + key} component={Input}/>
                                    {error && <div className={s.error}>{error}</div>}
                                </div>
                            })}
                        </div>

                    </div>

                <div>
                    <button><FontAwesomeIcon icon={faSave}/> Save</button>
                </div>
            </form>
        </div>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileDataFormDataType>({form: "edit_profile"})(ProfileDataForm)