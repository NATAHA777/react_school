import React from 'react'
import Card from '../../ui/card/Card'

export default function Documents() {
  return (
    <Card className="w-full">
      <div className="title_documents">Документы</div>
      <div className="documets_list">
        <div>
          <div>Лицензия на осущещствление образовательной деятельности</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Устав образовательной организации</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Правила внутреннего трудового распорядка</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Отчёт о результатах самообследования</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
        <div>
          <div>Свидетельство о государственной аккридетации</div>
          <img src="external/arrow_learn_more.svg" />
        </div>
      </div>
    </Card>
  );
}
